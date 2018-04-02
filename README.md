# slack-slash-hodor

This function demonstrates basic handling of a Slack slash command by responding to questions from users.

You can ask Hodor anything. 

Slack setup:
  1. go to https://<your-slack-team>.slack.com/apps
  2. search for 'slash commands'
  3. click on the result for 'Slash Commands'
  4. click 'Add Configuration'
  5. enter '/Hodor' and click 'Add Slash Command Integration'
  6. click 'edit configuration' (pencil icon)
  7. copy the token value and paste it into serverless.yml
  8. past the 'Invoke URL' from your new aws api gateway into the 'URL' field
  9. upload hodor.png under 'Customize Icon'
  10. click 'Save Integration'

