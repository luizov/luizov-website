import mailchimp from '@mailchimp/mailchimp_marketing';
import { config } from '../../config';

mailchimp.setConfig({
    apiKey: config.mailchimpToken,
    server: config.mailchimpServer
});

export default async function handler(req, res) {
    const response = await mailchimp.lists.getList(`${config.mailchimpAudienceId}`);
    const count = response.stats["member_count"];

    res.status(200).json({ count });
};