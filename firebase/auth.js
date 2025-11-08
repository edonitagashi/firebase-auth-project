// firebase/auth.js
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    alert(`U kyçe si: ${result.user.displayName} (${result.user.email})`);
  } catch (error) {
    console.error(error);
    alert(`Gabim: ${error.message}`);
  }
}
