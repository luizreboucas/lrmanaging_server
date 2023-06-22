import { describe, expect, test,it } from 'vitest'
import Categories from '../models/Categories.js'

it('should make a instance of category',()=>{
	const category = new Categories({nome: 'categoria nova'})
	expect(category).toBeInstanceOf(Categories)
})

it('should have a id', () => {
	const category = new Categories({nome: 'categoria nova'})
	expect(category.getId()).length(36)
})