import './style/style.scss';
import 'unicode-emoji-picker';

import global from './app/global';
import UI from './app/ui';
import BindEvents from './app/listeners';
import Storage from './app/storage';

UI.updateAll(Storage.getLists(), global.currentList);
BindEvents.updateAll();
