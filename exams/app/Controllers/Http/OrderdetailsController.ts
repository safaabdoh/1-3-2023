 import Ace from '@ioc:Adonis/Core/Ace';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Orderdetail from 'App/Models/Orderdetail';

export default class OrderdetailsController {
    public async getAll(ctx: HttpContextContract) {

        var result = await Orderdetail.query().preload('order').preload('product');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Orderdetail.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({ 
            order_id: schema.number(),
            quantity: schema.number(),
            price: schema.number(),
            line_number: schema.number(),
            product_id: schema.number(),
           
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var orderdetail = new Orderdetail();
        orderdetail.orderId = fields.order_id;
        orderdetail.quantity = fields.quantity;
        orderdetail.price = fields.price;
        orderdetail.lineNumber=fields.line_number;
        orderdetail.productId=fields.product_id;
        var result = await orderdetail.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            order_id: schema.number(),
            quantity: schema.number(),
            price: schema.number(),
            line_number: schema.number(),
            product_id: schema.number(),
            id:schema.number(),
           
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var orderdetail = await Orderdetail.findOrFail(id);
        orderdetail.orderId = fields.order_id;
        orderdetail.quantity = fields.quantity;
        orderdetail.price = fields.price;
        orderdetail.lineNumber=fields.line_number;
        orderdetail.productId=fields.product_id;
        var result = await orderdetail.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
     
        var productId=ctx.params.product_id;
        var orderId=ctx.params.order_id;
        if(productId == null && orderId==null){
        var id = ctx.params.id;
        var orderdetail = await Orderdetail.findOrFail(id);
        await orderdetail.delete();
        return { message: "The Orderdetail has been deleted!" };
        }
        else
        {
            return { message: "The Orderdetail has use is another" };
        }
        
    }
    public async order (ctx:HttpContextContract){
        var productId= ctx.params.product_id;
        var result = await Orderdetail.query().count(productId).groupBy(productId).orderBy(productId);
        return result;

       }

}
