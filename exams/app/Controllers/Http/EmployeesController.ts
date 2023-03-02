import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Employee from 'App/Models/Employee';
export default class EmployeesController {
    public async getAll(ctx: HttpContextContract) {
    
        var result = await Employee.query().preload('emplpyees').preload('office');
        return result;
    }

    public async getById(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var result = await Employee.findOrFail(id);
        return result;
    }
    public async create(ctx: HttpContextContract) {
     
        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            extension: schema.string(),
            email: schema.string(),
            office_id: schema.string(),
            emplpyees_id:schema.number(),
            job_title:schema.string(),
        });
        const fields = await ctx.request.validate({ schema: newSchema })

        var employee = new Employee();
        employee.firstName = fields.first_name;
        employee.lastName = fields.first_name;
        employee.extension = fields.extension;
        employee.officeId = fields.office_id;
        employee.email = fields.email;
        employee.emplpyeesId=fields.emplpyees_id;
        employee.jobTitle=fields.job_title;
        var result = await employee.save();
        return result;
    }

    public async update(ctx: HttpContextContract) {
      
        const newSchema = schema.create({
            id:schema.number(),
            first_name: schema.string(),
            last_name: schema.string(),
            extension: schema.string(),
            email: schema.string(),
            office_id: schema.string(),
            emplpyees_id:schema.number(),
            job_title:schema.string(),
        });

        const fields = await ctx.request.validate({ schema: newSchema })
        var id = fields.id;
        var employee = await Employee.findOrFail(id);
        employee.firstName = fields.first_name;
        employee.lastName = fields.first_name;
        employee.extension = fields.extension;
        employee.officeId = fields.office_id;
        employee.email = fields.email;
        employee.emplpyeesId=fields.emplpyees_id;
        employee.jobTitle=fields.job_title;
        var result = await employee.save();
        return result;
    }


    public async destory(ctx: HttpContextContract) {
        var employeeId=ctx.params.employee_id;
        var officeId=ctx.params.office_id;
        if(employeeId == null && officeId ==null){
        var id = ctx.params.id;
        var employee = await Employee.findOrFail(id);
        await employee.delete();
        return { message: "The Customer has been deleted!" };
        }
        else
        {
            return { message: "The Customer has use is another table" };
        }
    }
}
