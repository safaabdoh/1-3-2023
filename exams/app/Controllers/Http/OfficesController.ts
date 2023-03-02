import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Office from 'App/Models/Office';
export default class OfficesController {
    public async getAll(ctx: HttpContextContract) {

        var result = await Office.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Office.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({ 
            city: schema.string(),
            phone: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            state: schema.string(),
            country:schema.string(),
            postal_code: schema.string(),
            territory: schema.string(),
           
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var office = new Office();
        office.phone = fields.phone;
        office.addressLine1 = fields.address_line1;
        office.addressLine2 = fields.address_line2;
        office.city=fields.city;
        office.state=fields.state;
        office.postalCode=fields.postal_code;
        office.territory=fields.territory;
        office.country=fields.country;
        var result = await office.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            id:schema.number(),
            city: schema.string(),
            phone: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            state: schema.string(),
            country:schema.string(),
            postal_code: schema.string(),
            territory: schema.string(),
           
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var office = await Office.findOrFail(id);
        office.phone = fields.phone;
        office.addressLine1 = fields.address_line1;
        office.addressLine2 = fields.address_line2;
        office.city=fields.city;
        office.state=fields.state;
        office.postalCode=fields.postal_code;
        office.territory=fields.territory;
        office.country=fields.country;
        var result = await office.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
     
        var id = ctx.params.id;
        var customer = await Office.findOrFail(id);
        await customer.delete();
        return { message: "The Customer has been deleted!" };
        
    }
}
