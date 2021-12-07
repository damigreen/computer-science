/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { MailConfig } from '@ioc:Adonis/Addons/Mail'

const mailConfig: MailConfig & { sender: string }= {
  /*
  |--------------------------------------------------------------------------
  | Default mailer
  |--------------------------------------------------------------------------
  |
  | The following mailer will be used to send emails, when you don't specify
  | a mailer
  |
  */
  mailer: 'smtp',

  sender: Env.get("MAIL_FROM") as string,

  /*
  |--------------------------------------------------------------------------
  | Mailers
  |--------------------------------------------------------------------------
  |
  | You can define or more mailers to send emails from your application. A
  | single `driver` can be used to define multiple mailers with different
  | config.
  |
  | For example: Postmark driver can be used to have different mailers for
  | sending transactional and promotional emails
  |
  */
  mailers: {
    /*
    |--------------------------------------------------------------------------
    | Smtp
    |--------------------------------------------------------------------------
    |
    | Uses SMTP protocol for sending email
    |
    */
    smtp: {
      driver: 'smtp',
      host: Env.get('SMTP_HOST'),
      port: Env.get('SMTP_PORT'),
      secure: false,
      pool: true,
			auth: {
				user: Env.get('SMTP_USERNAME') as string,
				pass: Env.get('SMTP_PASSWORD') as string,
				type: 'login',
			},
      maxConnections: 5,
      maxMessages: 100,
      rateLimit: 10
    },
    mailgun: {
      driver: "mailgun",
      baseUrl: "https://api.mailgun.net/v3",
      key: Env.get("MAILGUN_API_KEY") as string,
      domain:"postmaster@sandboxff67107106d54319b47746525abba36d.mailgun.org"
    },
  },
}

export default mailConfig
