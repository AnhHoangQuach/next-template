import { AppType } from 'next/app';
import { default as Document, DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import { createEmotionCache, createEmotionServer } from 'utils/createEmotionCache';
import { MyAppProps } from './_app';

export const getInitialProps = async (context: DocumentContext) => {
  const originalRenderPage = context.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(context);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

type MyDocumentProps = DocumentProps & {
  emotionStyleTags: JSX.Element[];
};

const MyDocument = ({ emotionStyleTags }: MyDocumentProps) => {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/auragi.ico' />
        <meta name='emotion-insertion-point' content='' />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
