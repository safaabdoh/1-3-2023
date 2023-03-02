

import Route from '@ioc:Adonis/Core/Route'
import Orderdetail from 'App/Models/Orderdetail';


Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "CustomersController.getById");
   Route.get("/", "CustomersController.getAll");
   Route.post("/", "CustomersController.create");
   Route.put("/", "CustomersController.update");
   Route.delete("/:id", "CustomersController.destory");
}).prefix("/customers");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "EmployeesController.getById");
   Route.get("/", "EmployeesController.getAll");
   Route.post("/", "EmployeesController.create");
   Route.put("/", "EmployeesController.update");
   Route.delete("/:id", "EmployeesController.destory");
}).prefix("/employees");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "OfficesController.getById");
   Route.get("/", "OfficesController.getAll");
   Route.post("/", "OfficesController.create");
   Route.put("/", "OfficesController.update");
   Route.delete("/:id", "OfficesController.destory");
}).prefix("/offices");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "OrdersController.getById");
   Route.get("/", "OrdersController.getAll");
   Route.post("/", "OrdersController.create");
   Route.put("/", "OrdersController.update");
   Route.delete("/:id", "OrdersController.destory");
}).prefix("/orders");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "PaymentsController.getById");
   Route.get("/", "PaymentsController.getAll");
   Route.post("/", "PaymentsController.create");
   Route.put("/", "PaymentsController.update");
   Route.delete("/:id", "PaymentsController.destory");
}).prefix("/payments");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "ProductsController.getById");
   Route.get("/", "ProductsController.getAll");
   Route.post("/", "ProductsController.create");
   Route.put("/", "ProductsController.update");
   Route.delete("/:id", "ProductsController.destory");
}).prefix("/products");
}).prefix("api");

Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "ProductlinesController.getById");
   Route.get("/", "ProductlinesController.getAll");
   Route.post("/", "ProductlinesController.create");
   Route.put("/", "ProductlinesController.update");
   Route.delete("/:id", "ProductlinesController.destory");
}).prefix("/productsline");
}).prefix("api");


Route.group(() => {
  Route.group(() => {
   Route.get("/:id", "OrderdetailsController.getById");
   Route.get("/", "OrderdetailsController.getAll");
   Route.get("/productId", "OrderdetailsController.order");
   Route.post("/", "OrderdetailsController.create");
   Route.put("/", "OrderdetailsController.update");
   Route.delete("/:id", "OrderdetailsController.destory");
}).prefix("/orderdetails");
}).prefix("api");



