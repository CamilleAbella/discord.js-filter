import Discord from "discord.js"

type Filter = (message: Discord.Message) => Promise<boolean> | boolean

class Client extends Discord.Client {
  /**
   * The filter used in the filter listener
   * @type Filter
   * @private
   */
  private filter: Filter = () => true

  constructor() {
    super()
    this.on("message", this.filterListener)
  }

  /**
   * Single listener used by discord-filter
   * @param {Message} message
   * @private
   */
  private async filterListener(message: Discord.Message) {
    if (!(await this.filter(message))) {
      message
        .delete()
        .catch(console.error)
        .then(() => {
          this.emit("messageFiltered", message)
        })
    } else {
      this.emit("messageNotFiltered", message)
    }
  }

  /**
   * Set the message filter
   * @param {Filter} filter
   */
  public setFilter(filter: Filter) {
    this.filter = filter
  }
}

export default Client
