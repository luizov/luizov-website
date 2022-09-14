import mailchimp from '@mailchimp/mailchimp_marketing';
import { config } from 'config';

mailchimp.setConfig({
	apiKey: config.mailchimpToken,
	server: config.mailchimpServer
});

export default async function handler(req, res) {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({ error: 'Email is required' });
	}

	try {
		await mailchimp.lists.addListMember(`${config.mailchimpAudienceId}`, {
			email_address: email,
			status: 'subscribed'
		});

		return res.status(201).json({ error: '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
