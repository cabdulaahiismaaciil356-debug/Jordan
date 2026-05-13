require('dotenv').config();

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
  if (message.content === '!panel') {

    const embed = new EmbedBuilder()
      .setTitle('Team Control Panel')
      .setDescription('Select an action to manage your team.');

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId('invite')
        .setLabel('Invite Member')
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId('formation')
        .setLabel('Best Formation')
        .setStyle(ButtonStyle.Success),

      new ButtonBuilder()
        .setCustomId('disband')
        .setLabel('Disband')
        .setStyle(ButtonStyle.Danger)
    );

    await message.channel.send({
      embeds: [embed],
      components: [row]
    });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'invite') {
    await interaction.reply('Invite system furmay');
  }

  if (interaction.customId === 'formation') {
    await interaction.reply('4-2-1-3 ayaa fiican');
  }

  if (interaction.customId === 'disband') {
    await interaction.reply('Team-ka waa la tiray');
  }
});

client.login(process.env.DISCORD_TOKEN);
