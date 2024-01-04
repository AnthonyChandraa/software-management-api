import { Injectable } from "@nestjs/common";
import { Department } from "@prisma/client";
import { DepartmentsRepository } from "./departments.repository";
import { SelectDepartmentByIdInput } from "./dto/select-department-by-id.input";
import { UpdateDepartmentInput } from "./dto/update-department.input";
import { DeleteDepartmentInput } from "./dto/delete-department.input";

@Injectable()
export class DepartmentsService {
  constructor(private repository: DepartmentsRepository) {}

  async createDepartment(params: { name: Department['name'] }) {
    const { name } = params;
    return await this.repository.createDepartment({
      data: {
        name
      }
    });
  }

  async getDepartments() {
    return await this.repository.getDepartments({});
  }

  async getDepartmentById(params: SelectDepartmentByIdInput) {
    return this.repository.getDepartmentById({
      where: params
    });
  }

  async updateDepartment(params: UpdateDepartmentInput) {
    return this.repository.updateDepartment(params);
  }

  async deleteDepartment(params: DeleteDepartmentInput) {
    return this.repository.deleteDepartmentById({
      where: {
        id: params.id
      }
    });
  }
}