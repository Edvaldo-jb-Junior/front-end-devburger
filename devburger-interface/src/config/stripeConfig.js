import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(
    'pk_test_51T94LuPd3sjnW5eqgR0mU1wTj5a8PB9y3JHtoC1zIMFbCH9dQGVGmPIEqoqM78qrJLMgt3hGngjfrgQxCkYcQx3Q00GhW1pulA'
);


export default stripePromise;