import { SiInstagram, SiYoutube, SiTiktok } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

/*
 * Source de vérité UNIQUE des comptes réseaux sociaux.
 * Aucune URL de réseau ne doit être écrite en dur ailleurs dans le code :
 * le header, le footer et le JSON-LD (sameAs) consomment ce tableau.
 *
 * ⚠️ Le pseudo TikTok bascule le 10/08/2026 vers @enzoprat.studio.
 *    Le jour venu, ne changer QUE la ligne TikTok ci-dessous.
 *
 * NB : react-icons/si ne fournit plus l'icône LinkedIn (retirée pour raisons
 *      de marque) ; on utilise donc FaLinkedin (Font Awesome), même rendu SVG
 *      monochrome colorable en CSS (currentColor).
 */
export const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/enzoprat.studio', Icon: SiInstagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@enzoprat.studio', Icon: SiYoutube },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/enzopratstudio', Icon: FaLinkedin },
  { name: 'TikTok', url: 'https://www.tiktok.com/@enzo.artisanpro', Icon: SiTiktok }
];

/* Liste d'URLs seule — pratique pour le sameAs des schémas JSON-LD. */
export const SOCIAL_URLS = SOCIALS.map(s => s.url);
