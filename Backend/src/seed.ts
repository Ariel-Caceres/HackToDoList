import { CATEGORY_SEEDS } from "./database/seeds/category"
import { initDB } from "./database/db"
const main = async () => {
    await initDB()
    await CATEGORY_SEEDS()
    process.exit(0)
}
main()