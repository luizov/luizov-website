import mailchimp from '@mailchimp/mailchimp_marketing';
import { config } from 'config';

export const getSubscribers = async () => {
	const response = await mailchimp.lists.getList(`${config.mailchimpAudienceId}`);

	return {
		count: response.stats["member_count"]
	}
}
