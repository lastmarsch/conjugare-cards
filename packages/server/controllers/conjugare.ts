import express from 'express';

const conjugareRouter = express.Router({
  mergeParams: true,
});

conjugareRouter.get('/:verb', (req, res) => {
  console.log(req.params);
  res.json('It works!');
});

export { conjugareRouter };
