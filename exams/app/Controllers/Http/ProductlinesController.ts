import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Productline from 'App/Models/Productline';
export default class ProductlinesController {
    public async getAll(ctx: HttpContextContract) {

        var result = await Productline.all();
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Productline.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({
            product_line: schema.string(),
            text_description: schema.string(),
            html_description: schema.string(),
    
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var productline = new Productline();
        productline.productLine = fields.product_line;
        productline.textDescription = fields.text_description;
        productline.htmlDescription = fields.html_description;

        var result = await productline.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            id:schema.number(),
            product_line: schema.string(),
            text_description: schema.string(),
            html_description: schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var productline = await Productline.findOrFail(id);
        productline.productLine = fields.product_line;
        productline.textDescription = fields.text_description;
        productline.htmlDescription = fields.html_description;
   
        var result = await productline.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var lineId=ctx.params.line_id;
        if(lineId == null){
        var id = ctx.params.id;
        var productline = await Productline.findOrFail(id);
        await productline.delete();
        return { message: "The product Line has been deleted!" };
       
        }
    }

}
