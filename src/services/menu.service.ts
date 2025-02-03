import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../repositories/menu.repository';

@Injectable()
export class MenuService {
  constructor(private readonly menuRepository: MenuRepository) {}

  async findAll(): Promise<any[]> {
    return this.menuRepository.getAll();
  }

  async findById(id: number): Promise<any> {
    return this.menuRepository.getById(id);
  }

  async createMenu(name: string): Promise<any> {
    return this.menuRepository.create(name);
  }

  async deleteMenu(id: number): Promise<void> {
    const result = await this.menuRepository.delete(id);
    if (!result) {
      throw new Error(`Menu with ID ${id} not found`);
    }
  }

  async getGroupsByMenuId(id_menu: number) {
    return this.menuRepository.getGroupsByMenuId(id_menu);
  }

  async deleteGroup(id_group: number) {
    return this.menuRepository.deleteGroup(id_group);
  }

  async createGroup(name: string, id_menu: number) {
    return this.menuRepository.createGroup(name, id_menu);
  }

  async createItem(groupId: number, createItemDto: any) {
    return this.menuRepository.createItem(groupId, createItemDto);
  }

  async getItemsByGroupId(groupId: number) {
    return this.menuRepository.getItemsByGroupId(groupId);
  }

  async deleteItem(id_item: number) {
    return this.menuRepository.deleteItem(id_item);
  }

  async getComplementsByItemId(id_item: number) {
    return this.menuRepository.getComplementsByItemId(id_item);
  }

  async createComplement(id_item: number) {
    return this.menuRepository.createComplement(id_item);
  }

  async deleteComplement(id_comp: number) {
    return this.menuRepository.deleteComplement(id_comp);
  }

  async getGroupsByComplementId(id_comp: number) {
    return this.menuRepository.getGroupsByComplementId(id_comp);
  }

  async createGroupComplement(id_comp: number, name: string, mandatory: boolean, min: number, max: number) {
    return this.menuRepository.createGroupComplement(id_comp, name, mandatory, min, max);
  }

  async deleteGroupComplement(id_gc: number) {
    return this.menuRepository.deleteGroupComplement(id_gc);
  }

  async getItemsByGroupComplementId(id_gc: number) {
    return this.menuRepository.getItemsByGroupComplementId(id_gc);
  }

  async createItemComplement(id_gc: number, name: string, price: number, description: string, status: boolean, photo: string) {
    return this.menuRepository.createItemComplement(id_gc, name, price, description, status, photo);
  }

  async deleteItemComplement(id_ic: number) {
    return this.menuRepository.deleteItemComplement(id_ic);
  }

  async getMenuStructure(id_menu: number): Promise<any> {
    return this.menuRepository.getMenuStructure(id_menu);
  }
}
