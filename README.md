# Jordan Discord Bot

A Discord bot for team management with an interactive control panel.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** in the project root:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```

3. **Get your bot token:**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create or select your application
   - Go to "Bot" section
   - Click "Reset Token" to generate a new one
   - Copy the token into your `.env` file

4. **Run the bot:**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

## Features

- **Team Control Panel**: Use `!panel` command to display an interactive panel
- **Invite Member**: Button to manage team invitations
- **Best Formation**: View recommended team formation
- **Disband Team**: Option to disband the team

## Commands

- `!panel` - Display the team control panel with interactive buttons

## Security

- Bot token is stored in `.env` file (not committed to git)
- `.gitignore` protects sensitive files
- Use `process.env.DISCORD_TOKEN` to load the token securely

## Development

To use nodemon for auto-restart during development:
```bash
npm run dev
```
