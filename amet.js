import { base64url } from 'your-library';

const base64EncodedString = 'cmlkZTogZHJlYW1zIGJ1cm4gZG93bg';
const base64urlEncodedString = base64url.decode(base64EncodedString);
console.log(base64urlEncodedString);
// Output: "rider: dreams burn down"
