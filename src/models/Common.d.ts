type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type ContractError = {
  code: number | string;
  message: string;
};

type Address = `0x${string}`;

type ByAddress = {
  address: Address;
};

type PopupStepStatus = 'IDLE' | 'LOADING' | 'ERROR' | 'TRYAGAIN' | 'SUCCESS';

type PopupStepInfo = {
  status: PopupStepStatus;
  transactionHash?: string;
};
