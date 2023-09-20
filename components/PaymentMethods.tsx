
import {Image} from "@nextui-org/react";

export default function PaymentMethods() {
  return (
    <div className="py-12 bg-white text-black w-full mx-10">
      <div className='pb-8'>
        <h2 className="text-4xl font-bold text-center">Gestionamos tus metodos de pago</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly m-8">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image 
            src="/svgs/visa-5.svg"
            alt="Visa"
            width={100}
            height={80}
            className=" hover:scale-110 transition-transform duration-300 pb-4 " />
          <p className="text-lg font-semibold hidden">Visa</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <img src="/svgs/mastercard.svg" alt="Mastercard" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Mastercard</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svgs/paypal-3.svg" alt="PayPal" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4 " />
          <p className="text-lg font-semibold hidden">PayPal</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svgs/bitcoin-logo.svg" alt="Bitcoin" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Bitcoin</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/svgs/apple-pay-2.svg" alt="Apple Pay" className="w-56 h-24 hover:scale-110 transition-transform duration-300 pb-4" />
          <p className="text-lg font-semibold hidden">Apple Pay</p>
        </div>
      </div>
    </div>
  );
}
