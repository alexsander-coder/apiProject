import { Request, Response } from 'express';
import { Plan } from '../entities/Plans';

interface PaginationResult<T> {
  results: T[];
  totalResults: number;
  totalPages: number;
  currentPage: number;
}

export const paginationPlan = async (req: Request, res: Response) => {

  const paginatePlans = await Plan.find()

  ///////////////  PAGINACAO START  \\\\\\\\\\\\\\\\\\
  function paginate<T>(data: T[], page: number, limit: number): PaginationResult<T> {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalResults = data.length;
    const totalPages = Math.ceil(totalResults / limit);
    const currentPage = Math.min(Math.max(page, 1), totalPages);

    return {
      results: data.slice(startIndex, endIndex),
      totalResults,
      totalPages,
      currentPage,
    };
  }


  const page = parseInt(req.query.page?.toString() || '1');
  const limit = parseInt(req.query.limit?.toString() || '10');

  const paginatedResults = paginate(paginatePlans, page, limit);

  const results = { results: paginatedResults.results };

  res.send(results)
  /////////////  PAGINACAO END  \\\\\\\\\\\\\\

}
