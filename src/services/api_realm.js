import * as Realm from "realm-web";

const REACT_APP_REALM_APP_ID = "test_realm-okqls";

const realmApiService = {
  fetchUserByName: async (query) => {
    const app = new Realm.App({ id: REACT_APP_REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const userData = await user.functions.getUserByName(query);
      return userData;
    } catch (err) {
      console.error("Failed to log in", err);
      return null;
    }
  },

  fetchAllUsers: async () => {
    const app = new Realm.App({ id: REACT_APP_REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const userData = await user.functions.getUserByName("");
      return userData;
    } catch (err) {
      console.error("Failed to log in", err);
      return null;
    }
  },
  fetchUserById: async (query) => {
    const app = new Realm.App({ id: REACT_APP_REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const userData = await user.functions.getUserById(query);
      return userData;
    } catch (err) {
      console.error("Failed to log in", err);
      return null;
    }
  },
};

export default realmApiService;
