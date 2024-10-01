const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require("discord.js");
const db = require("../fonctions/database.js");

module.exports = {
    name: "say",
    description: "Envoie un message sous le nom du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        let msg = ""
        for (let i = 0; i < args.length; i++) {
          msg += args[i] + ' '
        }
        message.channel.send(msg)
    },
    async executeSlash(client, interaction) {
        interaction.channel.send(interaction.options.getString('message').replace(';', '\n'))
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .addStringOption(option =>
                option.setName('message')
                    .setDescription("Message que le bot doit envoyer. (; = saut de ligne)")
                    .setRequired(true)
            )
    }
}