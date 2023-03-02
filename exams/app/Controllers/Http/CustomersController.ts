import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CustomersController {
    public async getAll(ctx: HttpContextContract) {
        var country = ctx.request.input("country");
        var employeeId = ctx.request.input("employeeId");
        var query = Customer.query();
        if (country) {
            query.where("country", country);
        }
        if (employeeId) {
            query.where("employee_Id", employeeId);
        }

        var result = await query.preload('employee');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Customer.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({
            name: schema.string(),
            first_name: schema.string(),
            last_name: schema.string(),
            phone_number: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            city: schema.string(),
            state: schema.string(),
            country:schema.string(),
            postal_code: schema.string(),
            employee_id: schema.number(),
            credit_limit: schema.number(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var customer = new Customer();
        customer.name = fields.name;
        customer.firstName = fields.first_name;
        customer.lastName = fields.last_name;
        customer.phoneNumber = fields.phone_number;
        customer.addressLine1 = fields.address_line1;
        customer.addressLine2 = fields.address_line2;
        customer.city=fields.city;
        customer.state=fields.state;
        customer.postalCode=fields.postal_code;
        customer.employeeId=fields.employee_id;
        customer.creditLimit=fields.credit_limit;
        customer.country=fields.country;
        var result = await customer.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            id:schema.number(),
            name: schema.string(),
            first_name: schema.string(),
            last_name: schema.string(),
            phone_number: schema.string(),
            address_line1: schema.string(),
            address_line2: schema.string(),
            city: schema.string(),
            state: schema.string(),
            country:schema.string(),
            postal_code: schema.string(),
            employee_id: schema.number(),
            credit_limit: schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var customer = await Customer.findOrFail(id);
        customer.name = fields.name;
        customer.firstName = fields.first_name;
        customer.lastName = fields.last_name;
        customer.phoneNumber = fields.phone_number;
        customer.addressLine1 = fields.address_line1;
        customer.addressLine2 = fields.address_line2;
        customer.city=fields.city;
        customer.state=fields.state;
        customer.postalCode=fields.postal_code;
        customer.employeeId=fields.employee_id;
        customer.creditLimit=fields.credit_limit;
        customer.country=fields.country;
        var result = await customer.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var employeeId=ctx.params.employee_id;
        if(employeeId == null){
        var id = ctx.params.id;
        var customer = await Customer.findOrFail(id);
        await customer.delete();
        return { message: "The Customer has been deleted!" };
        }
        else
        {
            return { message: "The Customer has use is another" };
        }
    }
}
