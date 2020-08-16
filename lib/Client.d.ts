import Discord from "discord.js";
declare type Filter = (message: Discord.Message) => Promise<boolean> | boolean;
declare class Client extends Discord.Client {
    /**
     * The filter used in the filter listener
     * @type Filter
     * @private
     */
    private filter;
    constructor();
    /**
     * Single listener used by discord-filter
     * @param {Message} message
     * @private
     */
    private filterListener;
    /**
     * Set the message filter
     * @param {Filter} filter
     */
    setFilter(filter: Filter): void;
}
export default Client;
//# sourceMappingURL=Client.d.ts.map