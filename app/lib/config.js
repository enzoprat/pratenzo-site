/* =========================================================
   Prat Enzo — Configuration éditable
   Modifiez ce fichier pour personnaliser téléphone et clé Web3Forms.
   Pour modifier les réalisations : voir app/lib/data/realisations.js
   ========================================================= */

export const config = {
  // Identité
  brandName: 'Prat Enzo',
  domain: 'pratenzo.fr',
  baseUrl: 'https://pratenzo.fr',

  // ⚠️ Téléphone affiché sur le site
  phone: '+33 0 00 00 00 00',
  phoneDisplay: '+33 0 00 00 00 00',

  /*
   * 🔑 Web3Forms — où arrivent les demandes du formulaire
   * 1. Aller sur https://web3forms.com
   * 2. Entrer l'email "enzoprat@icloud.com" comme destinataire
   * 3. Récupérer la clé d'accès générée
   * 4. La coller ci-dessous (remplace YOUR_WEB3FORMS_ACCESS_KEY)
   *
   * L'email "enzoprat@icloud.com" est uniquement utilisé côté Web3Forms
   * et n'est JAMAIS exposé sur le site public.
   */
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  web3formsSubject: 'Nouvelle demande Prat Enzo',

  // Liens externes optionnels
  socials: {
    instagram: '',
    facebook: '',
    linkedin: ''
  }
};

// Réexport des réalisations depuis le fichier de données (rétro-compat)
export { realisations } from './data/realisations';
