const router = require('./index');

const homeCtrl = require('../controller/home');
const pageViewCtrl = require('../controller/page-view');

router.get('/', homeCtrl);
router.post('/page-view', pageViewCtrl);

module.exports = router;
