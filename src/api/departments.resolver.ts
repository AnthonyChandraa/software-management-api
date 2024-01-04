import { Args, Mutation, Query } from "@nestjs/graphql";
import { Resolver } from "@nestjs/graphql";
import { Department } from "src/modules/departments/departments.model";
import { DepartmentsService } from "src/modules/departments/departments.service";
import { CreateDepartmentInput } from "src/modules/departments/dto/create-department.input";
import { DeleteDepartmentInput } from "src/modules/departments/dto/delete-department.input";
import { SelectDepartmentByIdInput } from "src/modules/departments/dto/select-department-by-id.input";
import { UpdateDepartmentInput } from "src/modules/departments/dto/update-department.input";

@Resolver()
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Query(() => [Department])
  async getDepartments() {
    return this.departmentsService.getDepartments();
  }

  @Query(() => Department)
  async getDepartmentById(@Args('selectDepartmentByIdInput') selectDepartmentByIdInput: SelectDepartmentByIdInput) {
    return this.departmentsService.getDepartmentById(selectDepartmentByIdInput);
  }

  @Mutation(() => Department)
  async createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput) {
    return this.departmentsService.createDepartment(createDepartmentInput);
  }

  @Mutation(() => Department)
  async updateDepartment(@Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentsService.updateDepartment(updateDepartmentInput);
  }

  @Mutation(() => Department)
  async deleteDepartment(@Args('deleteDepartmentInput') deleteDepartmentInput: DeleteDepartmentInput) {
    return this.departmentsService.deleteDepartment(deleteDepartmentInput);
  }
}