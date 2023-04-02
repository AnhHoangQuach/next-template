type PaginateParams = {
  page?: number;
  size?: number;
};

type PaginateType = {
  currentPage: number;
  total: number;
  pages: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type Address = `0x${string}`;

type ContractError = {
  code: number | string;
  message: string;
};

type ByAddress = {
  address: Address;
};
