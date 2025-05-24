// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measconst handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Iniciando envío...', formState);
  setIsSubmitting(true);
  
  try {
    console.log('Conectando a Firestore...');
    const docRef = await addDoc(collection(db, 'leads'), {
      ...formState,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    console.log('Documento guardado con ID: ', docRef.id);
    
    setIsSubmitted(true);
    setFormState({
      name: '',
      company: '',
      position: '',
      email: '',
      currentTool: ''
    });
  } catch (err) {
    console.error('Error al guardar:', err);
    alert('Error al guardar: ' + err.message);
  } finally {
    setIsSubmitting(false);
  }
};const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Iniciando envío...', formState);
  setIsSubmitting(true);
  
  try {
    console.log('Conectando a Firestore...');
    const docRef = await addDoc(collection(db, 'leads'), {
      ...formState,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    console.log('Documento guardado con ID: ', docRef.id);
    
    setIsSubmitted(true);
    setFormState({
      name: '',
      company: '',
      position: '',
      email: '',
      currentTool: ''
    });
  } catch (err) {
    console.error('Error al guardar:', err);
    alert('Error al guardar: ' + err.message);
  } finally {
    setIsSubmitting(false);
  }
};const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Iniciando envío...', formState);
  setIsSubmitting(true);
  
  try {
    console.log('Conectando a Firestore...');
    const docRef = await addDoc(collection(db, 'leads'), {
      ...formState,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    console.log('Documento guardado con ID: ', docRef.id);
    
    setIsSubmitted(true);
    setFormState({
      name: '',
      company: '',
      position: '',
      email: '',
      currentTool: ''
    });
  } catch (err) {
    console.error('Error al guardar:', err);
    alert('Error al guardar: ' + err.message);
  } finally {
    setIsSubmitting(false);
  }
};import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1yZSKR5O26DK5VNtPEC3UJ0X3ZGD9qjI",
  authDomain: "landing-2e605.firebaseapp.com",
  projectId: "landing-2e605",
  storageBucket: "landing-2e605.firebasestorage.app",
  messagingSenderId: "567614427162",
  appId: "1:567614427162:web:9df74ea1f845e7170e41a3",
  measurementId: "G-2QQDENYY6E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Iniciando envío...', formState);
  setIsSubmitting(true);
  
  try {
    console.log('Conectando a Firestore...');
    const docRef = await addDoc(collection(db, 'leads'), {
      ...formState,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    console.log('Documento guardado con ID: ', docRef.id);
    
    setIsSubmitted(true);
    setFormState({
      name: '',
      company: '',
      position: '',
      email: '',
      currentTool: ''
    });
  } catch (err) {
    console.error('Error al guardar:', err);
    alert('Error al guardar: ' + err.message);
  } finally {
    setIsSubmitting(false);
  }
};import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1yZSKR5O26DK5VNtPEC3UJ0X3ZGD9qjI",
  authDomain: "landing-2e605.firebaseapp.com",
  projectId: "landing-2e605",
  storageBucket: "landing-2e605.firebasestorage.app",
  messagingSenderId: "567614427162",
  appId: "1:567614427162:web:9df74ea1f845e7170e41a3",
  measurementId: "G-2QQDENYY6E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      name: formState.name,
      email: formState.email,
      company: formState.company,
      position: formState.position,
      currentTool: formState.currentTool,
      createdAt: serverTimestamp(),
      status: 'new'
    });
    
    console.log('Documento guardado con ID:', docRef.id);
    setIsSubmitted(true);
    
    // Limpia el formulario
    setFormState({
      name: '',
      company: '',
      position: '',
      email: '',
      currentTool: ''
    });
    
  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Error al guardar los datos. Por favor, inténtalo de nuevo.');
  } finally {
    setIsSubmitting(false);
  }
};urementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1yZSKR5O26DK5VNtPEC3UJ0X3ZGD9qjI",
  authDomain: "landing-2e605.firebaseapp.com",
  projectId: "landing-2e605",
  storageBucket: "landing-2e605.firebasestorage.app",
  messagingSenderId: "567614427162",
  appId: "1:567614427162:web:9df74ea1f845e7170e41a3",
  measurementId: "G-2QQDENYY6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);