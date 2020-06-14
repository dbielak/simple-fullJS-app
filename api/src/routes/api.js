import { Router } from 'express';

import showSiteMapXml from '../controller/show_site_map';
// import upload from '../controller/upload';
// import verifyEmail from '../controller/verifyEmail';

const router = Router();

router.get('/sitemap.xml', showSiteMapXml);
// router.get('/verify', verifyEmail);
// router.post('/upload', upload);

export default router;
