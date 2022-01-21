import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const formRegisterState = atom({
  key: 'formRegisterState',
  default: {
    regionId: 1,
    titleRefId: 1,
    roleId: 1,
    defaultLanguageSysId: 5,
    firstName: '',
    lastName: ''
  },
  effects_UNSTABLE: [persistAtom]
});
export { formRegisterState };
