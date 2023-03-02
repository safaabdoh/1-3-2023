import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product';
export default class ProductsController {
    public async getAll(ctx: HttpContextContract) {
        var lineId = ctx.request.input("lineId");
        var quantityInStock = ctx.request.input("quantityInStock");
        var query = Product.query();
        if (lineId) {
            query.where("lineId", lineId);
        }
        if (quantityInStock) {
            query.where("quantityInStock",'<=', quantityInStock);
        }

        var result = await query.preload('line');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Product.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({
            dode: schema.string(),
            name: schema.string(),
            line_id: schema.number(),
            scale: schema.string(),
            vendor: schema.string(),
            description: schema.string(),
            quantity_in_stock: schema.number(),
            price: schema.number(),
            msrp:schema.number(),
    
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var product = new Product();
        product.name = fields.name;
        product.dode = fields.dode;
        product.lineId = fields.line_id;
        product.scale = fields.scale;
        product.vendor = fields.vendor;
        product.description = fields.description;
        product.quantityInStock=fields.quantity_in_stock;
        product.price=fields.price;
        product.msrp=fields.msrp;
   
        var result = await product.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            id:schema.number(),
            dode: schema.string(),
            name: schema.string(),
            line_id: schema.number(),
            scale: schema.string(),
            vendor: schema.string(),
            description: schema.string(),
            quantity_in_stock: schema.number(),
            price: schema.number(),
            msrp:schema.number(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var product = await Product.findOrFail(id);
        product.name = fields.name;
        product.dode = fields.dode;
        product.lineId = fields.line_id;
        product.scale = fields.scale;
        product.vendor = fields.vendor;
        product.description = fields.description;
        product.quantityInStock=fields.quantity_in_stock;
        product.price=fields.price;
        product.msrp=fields.msrp;
   
        var result = await product.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var lineId=ctx.params.line_id;
        if(lineId == null){
        var id = ctx.params.id;
        var product = await Product.findOrFail(id);
        await product.delete();
        return { message: "The product has been deleted!" };
        }
        else
        {
            return { message: "The product has use is another" };
        }
    }
   
}
