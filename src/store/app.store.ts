import { action, observable } from 'mobx';
import { persist } from 'mobx-persist';

class ObservableStore {
  @observable
  @persist
  name = '';

  @action
  setName(newName: string) {
    this.name = newName;
  }
}

const observableStore = new ObservableStore();

export default observableStore;
