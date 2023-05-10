import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { assetSelector } from 'reducers/assetSlice';
import { publicRoute } from 'routes';

const useRouterAsset = (url?: string) => {
  const router = useRouter();
  const { allTokens } = useSelector(assetSelector);

  const [token, setToken] = useState<TokenType>();

  useEffect(() => {
    const { address } = router.query;
    const nextToken = allTokens.find((item) => item.address === address);
    if (nextToken) {
      setToken(nextToken);
    } else {
      router.replace(url ?? publicRoute.home.path);
    }
  }, [router, allTokens, url]);

  return { token, setToken };
};

export default useRouterAsset;
