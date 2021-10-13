package com.dreis.backend.crmk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dreis.backend.crmk.model.History;

@Repository
public interface HistoryRepository extends JpaRepository<History, Long> {
}