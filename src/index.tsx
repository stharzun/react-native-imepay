import { NativeModules } from 'react-native';

type ImepayType = {
  makePayment(
    MERCHANT_CODE: string,
    MERCHANT_NAME: string,
    MERCHANT_RECORD_URL: string,
    MERCHANT_DELIVER_URL: string,
    AMOUNT: string,
    REFERENCE_ID: string,
    MODULE: string,
    USERNAME: string,
    PASSWORD: string,
    env: string
  ): Promise<number>;
};

const { Imepay } = NativeModules;

export default Imepay as ImepayType;
