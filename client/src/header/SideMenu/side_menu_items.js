import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

export const MENU_ITEMS = [
  {
    name: 'Ogłoszenia',
    link: '/moje-konto/ogloszenia',
    icon: PermIdentityOutlinedIcon
  },
  {
    name: 'Wiadomości',
    link: '/moje-konto/wiadomosci',
    icon: FormatListBulletedOutlinedIcon
  },
  {
    name: 'Schowek',
    link: '/moje-konto/schowek',
    icon: PlaceOutlinedIcon
  },
  {
    name: 'Płatności',
    link: '/moje-konto/platnosci',
    icon: ChromeReaderModeOutlinedIcon
  },
  {
    name: 'Ustawienia',
    link: '/moje-konto/ustawienia',
    icon: DraftsOutlinedIcon
  }
];
