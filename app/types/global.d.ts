declare global {
  interface Window {
    Mangomint?: {
      CompanyId?: number;
      book?: () => void;
      show?: () => void;
    };
  }
}

export {};
