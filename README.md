# slack-slash-hodor

This function demonstrates basic handling of a Slack slash command by responding to questions from users.

You can ask Hodor anything. 

!(hodor.png)

1. Slack setup:
  1. go to https://<your-slack-team>.slack.com/apps
  2. search for 'slash commands'
  3. click on the result for 'Slash Commands'
  4. click 'Add Configuration'
  5. enter '/Hodor' and click 'Add Slash Command Integration'
  6. click 'edit configuration' (pencil icon)
  7. copy the token value and paste it into serverless.yml

Deploy serverless.yml
	*(disregard if you installed this from the aws repository)*
  1. enter the url of the aws api created when you installed this service
  2. 


  1. Navigate to 
  2. Search for and select "Slash Commands".
  3. Enter a name for your command and click "Add Slash Command Integration".
  4. Copy the token string from the integration settings and use it in the next section.
  5. After you complete this blueprint, enter the provided API endpoint URL in the URL field.
To encrypt your secrets use the following steps:
  1. Create or use an existing KMS Key - http://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html
  2. Click the "Enable Encryption Helpers" checkbox
  3. Paste <COMMAND_TOKEN> into the kmsEncryptedToken environment variable and click encrypt
Follow these steps to complete the configuration of your command API endpoint
  1. When completing the blueprint configuration select "Open" for security
     on the "Configure triggers" page.
  2. Enter a name for your execution role in the "Role name" field.
     Your function's execution role needs kms:Decrypt permissions. We have
     pre-selected the "KMS decryption permissions" policy template that will
     automatically add these permissions.
  3. Update the URL for your Slack slash command with the invocation URL for the
     created API resource in the prod stage.