const express = require('express');
const Website = require('../models/websiteModel');
const { isAuth, isAdmin } = require('../utils');
const expressAsyncHandler = require('express-async-handler');

const websiteRouter = express.Router();

websiteRouter.get('/', async (req, res) => {
  const websites = await Website.find();
  res.send(websites);
});

websiteRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newWebsite = new Website({
      name: '' + Date.now(),
      slug: '' + Date.now(),
      image: '/images/',
      language: 'language',
      languageDescription: 'language description',
      description: 'description',
      link: 'link',
    });
    const website = await newWebsite.save();
    res.send({ message: 'Website Created', website });
  })
);

websiteRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const websiteId = req.params.id;
    const website = await Website.findById(websiteId);
    if (website) {
      website.name = req.body.name;
      website.slug = req.body.slug;
      website.image = req.body.image;
      website.language = req.body.language;
      website.languageDescription = req.body.languageDescription;
      website.description = req.body.description;
      website.link = req.body.link;
      await website.save();
      res.send({ message: 'Website Updated' });
    } else {
      res.status(404).send({ message: 'Website Not Found' });
    }
  })
);

websiteRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const website = await Website.findById(req.params.id);
    if (website) {
      await website.deleteOne(); // Use deleteOne instead of remove
      res.send({ message: 'Website Deleted' });
    } else {
      res.status(404).send({ message: 'Website Not Found' });
    }
  })
);

const PAGE_SIZE = 10;

websiteRouter.get(
  '/admin',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const websites = await Website.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countWebsites = await Website.countDocuments();
    res.send({
      websites,
      totalWebsites: countWebsites,
      page,
      pages: Math.ceil(countWebsites / pageSize),
    });
  })
);

websiteRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;

    const websites = await Website.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countWebsites = await Website.countDocuments();
    res.send({
      websites,
      totalWebsites: countWebsites,
      page,
      pages: Math.ceil(countWebsites / pageSize),
    });
  })
);

websiteRouter.get('/slug/:slug', async (req, res) => {
  const website = await Website.findOne({ slug: req.params.slug });
  if (website) {
    res.send(website);
  } else {
    res.status(404).send({ message: 'Website Not Found' });
  }
});

websiteRouter.get('/:id', async (req, res) => {
  const websiteId = await Website.findById(req.params.id);
  if (websiteId) {
    res.send(websiteId);
  } else {
    res.status(404).send({ message: 'Website Not Found' });
  }
});

module.exports = websiteRouter;
