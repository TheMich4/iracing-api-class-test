import IRacingAPI from "iracing-api";

class IR {
  private iRClient = new IRacingAPI();

  async login(username: string, password: string) {
    this.iRClient.login(username, password).then((res: any) => {
      if (res.data.authcode) {
        this.iRClient.getSeriesSeasons().then((res) => console.log(res));
      }
    });
  }
}

const main = async () => {
  const username = "";
  const password = "";

  const ir = new IR();
  await ir.login(username, password);
};

main().then(() => "DONE");
