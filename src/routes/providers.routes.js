import { Router } from "express";

import {deleteProvider, getProviders, insertProvider, searchProvider, updateProvider} from '../controllers/providers.controller'

const router = Router()

router.get('/providers', getProviders)

router.post('/newprovider', insertProvider)

router.delete('/providers/:id',deleteProvider)

router.put('/providers', updateProvider)

router.get('/findprovider/:id', searchProvider)

export default router