# slack-slash-hodor

This function demonstrates basic handling of a Slack slash command by responding to questions from users.

You can ask Hodor anything. Anything!

AWS Lambda configuration

After deploying from the AWS Lambda Repository, you will need to configure Slack. Copy the and paste the Token value 
from the Integration Settings to the 'Environment variables' section in the AWS Lambda function configuration screen. 
There should already be an entry for slacktoken. Click 'Save' and you're all set. 

Slack setup:
  1. go to https://your-slack-team.slack.com/apps
  2. search for 'slash commands'
  3. click on the result for 'Slash Commands'
  4. click 'Add Configuration'
  5. enter '/hodor' and click 'Add Slash Command Integration'
  6. click 'edit configuration' (pencil icon)
  7. copy the token value and paste it into the 'Environment variables' section  
  8. past the 'Invoke URL' from your new aws api gateway into the 'URL' field
  9. upload https://github.com/bmalnad/slack-slash-hodor/blob/master/hodor.png under 'Customize Icon'
  10. click 'Save Integration'

Useage:
	/hodor What time is it?

