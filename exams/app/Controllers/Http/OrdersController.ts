import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Order from 'App/Models/Order';
export default class OrdersController {
    public async getAll(ctx: HttpContextContract) {

        var result = await Order.query().preload('customer')
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Order.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({ 
            order_date: schema.date(),
            required_date: schema.date(),
            shipped_date: schema.date(),
            status: schema.string(),
            comments: schema.string(),
            customer_id:schema.number(),
           
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var order = new Order();
        order.orderDate = fields.order_date;
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.status=fields.status;
        order.comments=fields.comments;
        order.customerId=fields.customer_id;
        var result = await order.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            order_date: schema.date(),
            required_date: schema.date(),
            shipped_date: schema.date(),
            status: schema.string(),
            comments: schema.string(),
            customer_id:schema.number(),
            id:schema.number(),
           
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var order = await Order.findOrFail(id);
        var order = new Order();
        order.orderDate = fields.order_date;
        order.requiredDate = fields.required_date;
        order.shippedDate = fields.shipped_date;
        order.status=fields.status;
        order.comments=fields.comments;
        order.customerId=fields.customer_id;
        var result = await order.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
     
        var customerId=ctx.params.customer_id;
        if(customerId == null){
        var id = ctx.params.id;
        var order = await Order.findOrFail(id);
        await order.delete();
        return { message: "The order has been deleted!" };
        }
        else
        {
            return { message: "The order has use is another" };
        }
        
    }

}

