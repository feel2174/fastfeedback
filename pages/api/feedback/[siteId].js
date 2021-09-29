import { db } from '@/lib/firebase-admin';
import { getAllFeedback, getSites } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { siteId, route } = req.query;
    const { feedback } = await getAllFeedback(siteId, route);
    const { site } = await getSites(siteId);
    res.status(200).json({ feedback, site });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
