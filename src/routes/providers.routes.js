import { Router } from "express";
import {getProviders} from '../controllers/providers.controller'

const router = Router()

router.get('/providers', getProviders)

export default router