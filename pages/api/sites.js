// import { getAllSites } from '@/lib/db-admin';

// export default async (_, res) => {
//   const { sites, error } = await getAllSites();

//   if (error) {
//     res.status(500).json({ error });
//   }
//   res.status(200).json({ sites });
// };
import { auth } from '@/lib/firebase-admin';
import { getUserSites } from '@/lib/db-admin';
import { formatObjectKeys, logger } from '@/utils/logger';

export default async (req, res) => {
  try {
    const token = req.headers.token;
    const { uid } = await auth.verifyIdToken(token);
    const sites = await getUserSites(uid);
    res.status(200).json(sites);
  } catch (error) {
    logger.error(
      {
        request: {
          headers: formatObjectKeys(req.headers),
          url: req.url,
          method: req.method,
        },
        response: {
          statusCode: res.statusCode,
        },
      },
      error.message,
    );

    res.status(500).json({ error });
  }
};
