import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreateProjectResponseDTO } from './dto/create-project-response.dto';
import { CreateProjectDTO } from './dto/create-project.dto';
import { IContext } from 'src/common/interfaces/context';
import { FetchProjectResponseDTO } from './dto/fetch-project-response.dto';
import { FetchProjectDTO } from './dto/fetch-project.dto';
import { FetchProjectsTrendingWithTotalResponseDTO } from './dto/fetch-projects-trending/fetch-projects-trending-withTotal-response.dto';
import { FetchProjectsTrendingDTO } from './dto/fetch-projects-trending/fetch-projects-trending.dto';
import { FetchProjectsUserLoggedInWithTotalResponseDTO } from './dto/fetch-projects-user-loggedIn/fetch-projects-user-loggedIn-withTotal-response.dto';
import { FetchProjectsUserLoggedInDTO } from './dto/fetch-projects-user-loggedIn/fetch-projects-user-LoggedIn.dto';
import { FetchProjectsNewestWithTotalResponseDTO } from './dto/fetch-projects-newest/fetch-projects-newest-withTotal-response.dto';
import { FetchProjectsNewestDTO } from './dto/fetch-projects-newest/fetch-projects-newest.dto';

@Resolver()
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => FetchProjectResponseDTO)
  async fetchProject(
    @Args('fetchProjectDTO') fetchProjectDTO: FetchProjectDTO,
  ): Promise<FetchProjectResponseDTO> {
    return this.projectService.fetchProject({ fetchProjectDTO });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Query(() => FetchProjectsUserLoggedInWithTotalResponseDTO)
  async fetchProjectsUserLoggedIn(
    @Args('fetchProjectsUserLoggedInDTO')
    fetchProjectsUserLoggedInDTO: FetchProjectsUserLoggedInDTO,
    @Context() context: IContext,
  ): Promise<FetchProjectsUserLoggedInWithTotalResponseDTO> {
    return this.projectService.fetchProjectsUserLoggedIn({
      fetchProjectsUserLoggedInDTO,
      context,
    });
  }

  @Query(() => FetchProjectsTrendingWithTotalResponseDTO)
  async fetchProjectsTrending(
    @Args('fetchProjectsTrendingDTO')
    fetchProjectsTrendingDTO: FetchProjectsTrendingDTO,
  ): Promise<FetchProjectsTrendingWithTotalResponseDTO> {
    return this.projectService.fetchProjectsTrending({
      fetchProjectsTrendingDTO,
    });
  }

  @Query(() => FetchProjectsNewestWithTotalResponseDTO)
  async fetchProjectsNewest(
    @Args('fetchProjectsNewestDTO')
    fetchProjectsNewestDTO: FetchProjectsNewestDTO,
  ): Promise<FetchProjectsNewestWithTotalResponseDTO> {
    return this.projectService.fetchProjectsNewest({ fetchProjectsNewestDTO });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => CreateProjectResponseDTO)
  async createProject(
    @Args('createProjectDTO') createProjectDTO: CreateProjectDTO,
    @Context() context: IContext,
  ): Promise<CreateProjectResponseDTO> {
    return this.projectService.createProject({ createProjectDTO, context });
  }
}
